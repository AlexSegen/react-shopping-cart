import React from 'react';
import Layout from '../components/Layout';
import { GitHubIcon} from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>Hakkında</h1>
                <p>Tüm ürünlerimizi elden, kontrol ederek ve eğitimlerini vererek teslim ediyoruz.</p>

                <a className="btn btn-primary" href="https://www.zihatim.com">
                    <GitHubIcon width={"18px"}/> <span className="ml-2 mr-4">Anasayfaya dön </span></a>
            </div>
        </Layout>
     );
}
 
export default About;