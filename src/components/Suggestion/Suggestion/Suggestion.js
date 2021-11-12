import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Suggestion.css';

const Suggestion = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user} = useAuth();
    const onSubmit = data => console.log(data);
    return (
        <div id="suggestion" className="d-flex justify-content-center">
          <div>
          <h1>Get Suggestion</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Your Name" defaultValue={user?.displayName} {...register("example")} />
      <input placeholder="Your Email" defaultValue={user?.email} {...register("example")} />
      <input placeholder="Age" defaultValue="Age" {...register("example")} />
      <input style={{resize:"none", height:"100px"}} defaultValue="Problems" {...register("exampleRequired", { required: true })} />
      {errors.exampleRequired && <span className="text-danger">This field is required</span>}
      <Link to="/submit">
        <input className="bg-success" type="submit" />
      </Link>
    </form>
    </div>
        </div>
    );
};

export default Suggestion;