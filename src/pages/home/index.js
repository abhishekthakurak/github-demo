import { 
    wrapperStyle,
} from 'src/pages/home/style.js'
import SidePane from 'components/SidePane'
import fetchData from './fetchData'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RightPane from 'components/RightPane'
function Home () {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchData())
    }, [])
    
    return (
        <div css={wrapperStyle}>
           <SidePane/>

           <RightPane/>
        </div>
    )
}

export default Home