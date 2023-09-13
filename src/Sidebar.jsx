import {PencilLine} from "@phosphor-icons/react";

import styles from './sidebar.module.css';

export function Siderbar() {
    return(

 <sidebar className={styles.sidebar}>
 
 
      
      <img
       className={styles.cover} 
       src="https://images.unsplash.com/photo-1682685797366-715d29e33f9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" 
      />

    <div className={styles.profile}>
   
     <img className={styles.avatar} src="https://github.com/GustRV.png" />
   
    <strong>Diego Fernandes</strong>
    
    
    <span>web Developer</span>
     
    </div>

    <footer>
   
   <a href="#"> 
   <PencilLine size={20} />
   Editar seu Perfil 
   </a>
 
 
   
    </footer>
     

</sidebar>

          


    );
};