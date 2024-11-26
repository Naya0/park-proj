import React from 'react'

const TasksModulesAdminPanelItem = ({ description, image, imageBack, alt }) => {
    return (
        <div className='admin-panel__item'>
            <p className="description">{description}</p>
            {imageBack &&
                <div className="back-container">
                    <img className='back-image' src={imageBack} alt='фон' />
                </div>
            }
            <div className="image-container">
                <img className="image" src={image} alt={alt} />
            </div>
        </div>
    )
}

export default TasksModulesAdminPanelItem