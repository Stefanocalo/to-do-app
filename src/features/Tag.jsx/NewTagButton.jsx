import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TagOption, TagForm, Close, FormLabel,themeDark, lightTheme, ButtonP, ButtonS } from "../../style";

import { addTag } from "../../app/todoSlice";
import uuid4 from "uuid4";
import { toast } from "react-hot-toast";

export const NewTagButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('blue');

    const dispatch = useDispatch();

    const tags = useSelector(state => state.todo.tag);


    const handleSubmit = (e) => {
        e.preventDefault();
    //Check if all the variables exist
        if(title.length > 0 || color) {
        //Check if name is not already taken
           if(tags.filter(tag => tag.tag === title).length > 0) {
            //If so error message
            toast.error('This tag name already ecists. Choose a different one.');
           } else {
            //Else add tag, success message and close edit
            dispatch(addTag({
                tagId: uuid4(),
                color,
                tag: title
            }))
            toast.success(`Tag ${title} added succesfully!`);
            setIsOpen(false);
           }
    //No valid variables && error message
        } else {
            toast.error('Provide a valid tag title.');
        }
        
    };

    // Cancel handler

    const handleCancel = () => {
        setIsOpen(false);
        setTitle('');
        setColor('blue');
    }

    //Theming

    const [localTheme, setLocalTheme] = useState('lightTheme');
    const currentTheme = useSelector(state => state.todo.theme);
   
    useEffect(() => {
        setLocalTheme(currentTheme);
    }, [currentTheme]);

    let theme = lightTheme;

    const getTheme = () => {
        switch(localTheme){
            case 'lightTheme':
                theme = lightTheme;
            break;
            case 'themeDark':
                theme = themeDark;
            break; 
        }
    }
    getTheme();

    const height = isOpen ?  '17rem' : '4rem';
    
    return(
        <TagOption 
        style={{height: height}}>
            {!isOpen && <h3 
            role='button'
            style={{width: '100%', textAlign: 'center', cursor: 'pointer'}}
            onClick={() => setIsOpen(true)}
            >Add New Tag</h3>}
            {isOpen && <TagForm onSubmit={handleSubmit} >
                <div className="mainWrapper" >
                    <div 
                    onClick={() => handleCancel()}
                    style={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Close>X</Close>
                    </div>
                    <div className="spaceAround">
                        <div className="editWrapper">
                            <div className="lableWrapper">
                                <FormLabel  htmlFor="title">Tag title:</FormLabel>
                                <input 
                                style={{backgroundColor: theme.colors.tertiary, color: theme.colors.secondary,height: '2rem', borderRadius: '8px', fontSize: '1rem', margin: '0 1rem'}}
                                type='text' id='title' value={title} onChange={(e) => setTitle(e.target.value)}></input>
                            </div>
                            <div className="lableWrapper">
                                <FormLabel htmlFor="tag">Color:</FormLabel>
                                <div style={{display:'flex', alignItems: 'center'}}>
                                    <select 
                                    style={{backgroundColor: theme.colors.tertiary, color: theme.colors.secondary, height: '2rem', borderRadius: '8px', fontSize: '1rem', margin: '0 1rem'}}
                                    name='color' value={color} onChange={(e) => setColor(e.target.value)}>
                                        <option value='blue'>Blue</option>
                                        <option value='yellow'>Yellow</option>
                                        <option value='orange'>Orange</option>
                                        <option value='red'>Red</option>
                                        <option value='purple'>Purple</option>
                                        <option value='pink'>Pink</option>
                                        <option value='green'>Green</option>
                                    </select>
                                    <div style={{height: '2rem', width: '2rem', borderRadius: '8px', border: `1px solid ${theme.colors.primary}`, backgroundColor: `${color}`, margin: '0.2rem', transition: '0.3s'}}/>
                                </div>
                            </div>
                        </div>
                        <div className="editWrapper">
                            <div>
                                <ButtonP
                                type="submit"
                                >Add tag</ButtonP>
                            </div>
                            <div>
                                <ButtonS 
                                onClick={() => handleCancel()}
                                type='button'>Cancel</ButtonS>
                            </div>
                        </div>
                    </div>
                </div>
            </TagForm>}
        </TagOption>
            
    )
}