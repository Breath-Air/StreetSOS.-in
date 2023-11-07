import React from 'react'
import { useState, useEffect } from "react";
import { imgDB, txtDB } from './firebase'
import {
    ref,
    uploadBytes,
    listAll,
    getDownloadURL
} from 'firebase/storage';
import { v4 } from "uuid";
import { addDoc, collection, getDocs } from 'firebase/firestore';


function Photos({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false)
    const options = ['pathhole', 'overflown Roads', 'toppled trees']

    const [IsOpen, setIsOpen] = useState(false)

    const [txt, setTxt] = useState('')
    const [img, setImg] = useState('')
    const [data, setData] = useState([])

    const handleUpload = (e) => {
        console.log(e.target.files[0]);
        const imgs = ref(imgDB,`Imgs/${v4()}`)
        uploadBytes(imgs,e.target.files[0]).then(data => {
            console.log(data, "imgs");
            getDownloadURL(data.ref).then(val => {
                setImg(val);
            })
        })
    }

    const handleClick = async () => {
        const valRef = collection(txtDB, 'txtData')
        await addDoc(valRef,{txtVal:txt, imgUrl:img})
        console.log("data added");
    }

    const getData = async () => {
        const valRef = collection(txtDB, 'txtData')
        const dataDb = await getDocs(valRef)
        const allData = dataDb.docs.map(val=>({...val.data(),id:val.id}))
        setData(allData)
        console.log(dataDb);
    }   

    useEffect(()=>{
        getData()
    }, [])
    console.log(data, "datadata");

    return (
        <div className='Photos'>
            <div>
                <div className='inputs'>
                <input
                    type="file"
                    onChange={(e) => handleUpload(e)}
                />
                <span className='status' onChange={(e) => setTxt(e.target.value)}>location</span>
                    <button className='btn-l' onClick={getLocation}>
                        use my location
                    </button>
                    <div className='dropdown'>
                        <div className='dropdown-btn' onClick={e => setIsActive(!isActive)} onChange={(e) => setTxt(e.target.value)}>
                        Category: {selected} 
                        </div>
                        {isActive && (
                            <div className='dropdown-content'>
                            {options.map(option => (
                                <div onClick={e => {setSelected(option)
                                    setIsActive(false)
                                  }}
                                className='dropdown-item'>
                                    {option}
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                    <textarea placeholder='Message'/>
                </div>
                <div className='btn-div'>
                <button
                onClick={handleClick}
                >
                    submit
                </button>
                </div>
            </div>
        </div>
    )
}

export default Photos


const getLocation = () => {
    fetch("https://ipapi.co/json/")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            const des = document.querySelector("span");
            des.innerHTML = ` ${data.city}, ${data.region} <br/> Latitude: ${data.latitude}, Longitude: ${data.longitude}`;
        })
}