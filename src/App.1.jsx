import {Header} from './components/header';
import {Post} from './components/Post';
import { Siderbar } from './Sidebar';

import './Global.css';

import styles from './App.module.css';



export function App () {

    return (
        <div>
            
            <Header />
        <div className ={styles.wrapper}>
            
           <Siderbar />
           
            <main>
                <Post
                author="Diogo Fernandes"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe inventore et commodi repudiandae est harum fugit? Optio incidunt quae ratione, consequatur magni dolorum. Necessitatibus sunt cupiditate architecto illum neque nemo?"
           />

                 <Post 
                 author="Gabreil buzzi"
                 content='Post bem legal meu patrao'
        />
            </main>
        </div>
           
        
        </div>
    )
}
