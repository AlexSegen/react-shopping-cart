import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center">
                <h1>About</h1>
                <p>This is the About Page.</p>
            </div>
        </Layout>
     );
}
 
export default About;