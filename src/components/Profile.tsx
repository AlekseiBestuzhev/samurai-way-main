import React from "react";
import PostsBlock from "./PostsBlock";

const Profile = () => {
    return (
        <main className={'content'}>
            <img className={'page-label'}
                 src={'https://wallup.net/wp-content/uploads/2016/01/257350-galaxy-NASA-space-Milky_Way.jpg'}
                 alt={'Stars'}/>
            <section className={'person-block'}>
                <img className={'avatar'} src={'https://masyamba.ru/%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/18-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%BE%D0%B2.jpg'} alt={'Avatar'}/>
                <div className={'about-text-block'}>
                    <h2 className={'person-name'}>Alex Nealex</h2>
                    <p>beginner frontend developer</p>
                </div>
            </section>
            <PostsBlock/>
        </main>
    )
}

export default Profile;
