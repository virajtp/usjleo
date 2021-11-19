import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [chair, setchair] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, chair}
        setIsPending(true);
        console.log(blog);
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
           
        }).then(()=>{
            setIsPending(false);
            history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>Add New Project</h2>
            <form on onSubmit = {handleSubmit}>
                <label>Project Name : </label>
                <input 
                    type="text"
                    required
                    value={ title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Discription : </label>
                <textarea 
                    required
                    value={ body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Chair Person : </label>
                <input 
                    type="text"
                    required
                    value={ chair }
                    onChange={(e) => setchair(e.target.value)}
                />
                {/* <label>Discription : </label>
                <label>Chair Person : </label>
                <select
                    value = {chair}
                    onChange={(e) => setchair(e.target.value)}
                >
                    <option value="Perera">Perera</option>
                    <option value="Kapila">Kapila</option>
                </select> */}
                { !isPending && <button>Add Post</button>}
                { isPending && <button>Adding Post...</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{chair}</p> */}
            </form>
        </div>
     );
}
 
export default Create;