import React, {useState} from 'react';
import Modal from 'react-modal';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Footer from '../Header/Footer';
import './SingleItem.css';

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '700px',
        overflow: 'scroll'
    }
};
Modal.setAppElement("#modal-root");

const SingleItem = ({checkItem, addCart}) => {
    //檢查id是否與路徑pid相同
    // const productId = props.match.params.pid;
    // const checkItem = Products.filter(item => item.id === +productId);
    const [openModal, setOpenModal] = useState(false);
    const [switchPic, setSwitchPic] = useState(false);

    const openModalHandler = () => {
        setOpenModal(true)
    }

    const closeModalHandler = () => {
        setOpenModal(false)
    }

    const handleAddClick = () => {
        addCart(checkItem[0])
    }

    const handleLeftClick = () => {
        setSwitchPic(!switchPic)
    }

    const handleRightClick = () => {
        setSwitchPic(!switchPic)
    }

    let oneItem = checkItem.map(item => {
        return(
            <div key={item.id}>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModalHandler}
                style={customStyles}
                contentLabel="Size Chart">
                <img src="https://cdn.shopify.com/s/files/1/1380/3157/files/168293_original_1-2_2048x2048.png?v=1474813445" alt="" className="size-image"/>
            </Modal>

            <div className="content" key={item.id}>
            <div className="row">
                <div className="col s12 m7 product-image">
                    {(!switchPic) ? 
                    <img src={item.image} alt="" className="itemImg"/>
                    :
                    <img src={item.hoverImage} alt="" className="itemImg"/>
                    }
                    <i class="material-icons left-icon" onClick={handleLeftClick}>keyboard_arrow_left</i>
                    <i class="material-icons right-icon" onClick={handleRightClick}>keyboard_arrow_right</i>
                </div>
                <div className="col s12 m5 content-detail">
                    <h5>{item.productName}</h5>
                    <h6>CAD ${item.price}</h6>
                    <p className="descript">{item.description}</p>
                    <hr/>
                    <p onClick={openModalHandler} className="size-chart"><i className="material-icons">straighten</i>Size Chart</p>
                    <Link to="/cart">
                        <button className="cart-Btn" onClick={()=>handleAddClick()}>ADD TO CART</button>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <h5>Material</h5>
                    <p>{item.material.farbicDetail}</p>
                    <hr/>
                    <h5>Washing Instructions</h5>
                    <p>{item.material.washingInstruction}</p>
                    <p className="red-text">{item.material.warning}</p>
                </div>
            </div>
        </div> 
        </div>
        )
    })

    return (
        <>
        <div className="single-box">
            <div className="singleItem">
                {oneItem}
            </div>
            <Footer/>
        </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    const productId = ownProps.match.params.pid;
    return{
        checkItem: state.cart.Products.filter(list => list.id === +productId)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addCart: (checkItem) => dispatch({type: "ADD_TO_CART", payload: checkItem})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
