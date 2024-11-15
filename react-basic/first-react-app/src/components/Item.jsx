import { version } from 'react';
import iphonePic from '../assets/iphone14.jpg'
import propTypes from 'prop-types'

function Item(props){
    return (
        <div className='item'>
            <img alt="iphone pic" className='iphoneimg' src = {iphonePic}></img>
            <span className='label'>Iphone {props.version}</span>
            <span className='label'>ESim Supported  {props.esimSupported==true?"yes":"No"}</span>
        </div>
    );
}
Item.propTypes = {
    version: propTypes.number,
    esimSupported: propTypes.bool,
}
export default Item