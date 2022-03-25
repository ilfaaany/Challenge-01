const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");

const port = 3000;
const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());

// middleware express.static untuk menerapkan file statis, seperti gambar dll
app.use(express.static("./src/public"));
app.use(express.static("./src/scripts"));

// set view engine
const viewspath = path.join(__dirname, "./src/views/pages");
app.set("views", viewspath);
app.set("view engine", "ejs");

// membaca json
const dataPath = path.join(".", "data", "file.json");
const readJSON = fs.readFileSync(dataPath);
// console.log('before parsing', readJSON)
let datas = JSON.parse(readJSON);
// console.log('after parsing', datas);

app.get("/", (req, res) => {
    res.redirect("/login");
});

app.get("/login", (req, res) => {
    res.render("login.ejs", { title: "Login" });
});

app.post("/login", urlencodedParser, [
    check("email")
        .matches(/(^[a-zA-Z0-9_.]+[@]{1}[a-z0-9]+[\.][a-z]+$)/)
        .withMessage("Email salah, perhatikan format penulisan email yang benar."),
    check("password")
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/)
        .withMessage("Password salah, perhatikan penggunaan huruf kapital."),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // retun res.status(422).jsonp(errors.array())
        const alert = errors.array();
        res.render("login", {
            alert, title: "Halaman Login",
        });
    } else {
        res.redirect("/dashboard");
    }
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard.ejs", {
        title: "Halaman Dashboard",
        datas,
        quicklink: "Dashboard",
        href: "/dashboard",
    });
});

app.get("/cars", (req, res) => {
    res.render("cars.ejs", {
        title: "Halaman List Car",
        datas,
        quicklink: "Cars",
        href: "/cars",
    });
});

// add
app.get("/add", (req, res) => {
    res.render("add.ejs", {
        title: "Halaman Add Car",
        selectedData: "",
        titleContent: "Add List Car",
        action: "/add",
        quicklink: "Cars",
        href: "/cars",
    });
});

app.post("/add", urlencodedParser, (req, res) => {
    const {
        nama,
        harga,
        upload,
        start,
        finish,
        created,
        updated,
    } = req.body;

    const newData = {
        ID: datas.length + 1,
        car: nama,
        price: harga,
        uploadImg: upload,
        startRent: start,
        finishRent: finish,
        createdAt: created,
        updatedAt: updated,
    };
    datas.push(newData);

    fs.writeFileSync(dataPath, JSON.stringify(datas, null, 4));
    res.redirect("/cars");
});

app.get("/edit/:id", (req, res) => {
    const { id } = req.params;

    const selectedData = datas.filter((element) => element.ID === parseInt(id, 10));

    console.log(selectedData);
    res.render("add.ejs", {
        selectedData: selectedData[0],
        title: "Halaman Edit Data",
        titleContent: "Edit Car",
        action: `/edit/${id}`,
        quicklink: "Cars",
        href: "/cars",
    });
});

app.post("/edit/:id", urlencodedParser, (req, res) => {
    const { id } = req.params;
    const {
        nama,
        harga,
        upload,
        start,
        finish,
        created,
        updated,
    } = req.body;

    for (let i = 0; i < datas.length; i += 1) {
        if (datas[i].ID === parseInt(id, 10)) {
            datas[i].car = nama;
            datas[i].price = harga;
            datas[i].uploadImg = upload;
            datas[i].startRent = start;
            datas[i].finishRent = finish;
            datas[i].createdAt = created;
            datas[i].updatedAt = updated;
        }
    }

    fs.writeFileSync(dataPath, JSON.stringify(datas, null, 4));
    res.redirect("/cars");
});

app.get("/delete/:id", (req, res) => {
    const { id } = req.params;
    const newData = datas.filter((data) => data.ID !== parseInt(id, 10));
    datas = newData;
    console.log(datas);
    fs.writeFileSync(dataPath, JSON.stringify(datas, null, 4));
    console.log(datas);
    res.redirect("/cars");
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});
