import React from 'react';
import Layout from '../components/Layout';
import styles from './home.module.scss';
import logo from '../assets/img/logo.svg';

const Home = () => {

    return ( 
        <Layout>
            <div className="text-center">
                <h1>Home</h1>
                <img src={logo} className={styles.logo} alt="logo"/>
                <p>This is the Home Page.</p>
            </div>
        </Layout>
     );
}
 
export default Home;