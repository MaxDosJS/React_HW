
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false); 
    const [editedBudget, setEditedBudget] = useState(budget); 

    const handleEditClick = () => {
        setIsEditing(true); 
    };

    const handleSaveClick = () => {
        setIsEditing(false); 
        dispatch({
            type: 'UPDATE_BUDGET',
            payload: editedBudget,
        });
    };

    return (
        <div>
            {isEditing ? (
             
                <div className="alert alert-secondary">
                    <input
                        type="number"
                        value={editedBudget}
                        onChange={(e) => setEditedBudget(e.target.value)}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
          
                <div className="alert alert-secondary">
                    <h2>Budget: ${budget}</h2> 
                    <button onClick={handleEditClick} style={{position:'relative', left: '220px', bottom: '40px'}}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default Budget;
