import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Beepbeep from '../../../Komponen/Img/img-BeepBeep.png'

export const CardDelate = () => {
  return (
    <div className='delateCard'>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Beepbeep} />
            <Card.Body>
                <Card.Title className='Title'>Menghapus Data Mobil</Card.Title>
                <Card.Text className='Question'>Setelah dihapus data mobil tidak dapat dikembalikan. Yakin ingin menghapus</Card.Text>
                <div className='YesNo'>
                    <Button variant="primary">Ya</Button> <Button variant="outline-primary">Tidak</Button>{' '}
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
