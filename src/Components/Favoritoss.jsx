import {useState,useEffect} from 'react'
import Card from './Card';

function Favoritoss(props) {
    const [favorites,setFavorites] = useState([]);


    useEffect(()=>{
        const favsInLocal=localStorage.getItem('favs')
        
        if (favsInLocal !=null){
            const favsArray=JSON.parse(favsInLocal)
            setFavorites(favsArray)
            console.log(favsInLocal)
        }
    },[favorites])



  return (
    <div style={{height:'90vh'}}>
        <Card moviesList={favorites} addOrRemoveFavs={props.addOrRemoveFavs}></Card>
    </div>
  )
}

export default Favoritoss