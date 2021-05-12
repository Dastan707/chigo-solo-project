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
                <ul>
                    <li>{item.description}</li>
                    <button onClick={() => deleteComment(item.id)}>Delete Comm</button>
                </ul>
            ))}
        </div>
    );
};

export default CommentsList;