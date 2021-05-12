import React, { useContext, useEffect } from 'react';
import { productsContext } from '../../contexts/ProductsContext';
import './CommentList.css'

const CommentsList = () => {
    const { getCommentsData, deleteComment, comments } = useContext(productsContext);

    useEffect(()=>{
        getCommentsData()
    },[])
    return (
        <div>
            {comments.map(item => (
                <ul className='desc-list_comm'>
                    <li className='desc-item'>{item.description}</li>
                    <button className='btn-delete' onClick={() => deleteComment(item.id)}>Delete</button>
                </ul>
            ))}
        </div>
    );
};

export default CommentsList;