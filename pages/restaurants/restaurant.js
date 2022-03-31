import React from 'react'
import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../../src/config/firebase'

const Rest = ({ data }) => {
    console.log(data)

    return (
        <div>
            {
                data && data.map((d) => (
                    <div key={d.uid}>
                        <h1>{d.name}</h1>
                        <p>price: {d.price}</p>
                        <p>description: {d.description}</p>
                    </div>
                ))

            }
        </div>
    )
}


export default Rest

export async function getServerSideProps(context) {
    const { name } = context.query;
    const resdata = await getDocs(query(collection(db, "products"), where('belongRestaurant', "==", name)));
    const data = resdata.docs.map(doc => {
        return {
            ...doc.data(),
            uid: doc.id
        }
    })

    return {
        props: {
            data
        }
    }
}