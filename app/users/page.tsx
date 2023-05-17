'use client';
import { signOut } from 'next-auth/react';
import EmptyState from '../components/EmptyState';

const People = () => {
  return (
    // <div className="hidden lg:block lg:pl-80 h-full">
    <div className=" lg:block lg:pl-80 h-full">
      <EmptyState />
      <button onClick={()=>signOut()}>Logout</button>
    </div>
   );
}
 
export default People;
