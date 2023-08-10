import { FC } from 'react';

import { LinkButton } from '@/components/ui/button';

import $styles from './page.module.css';

const App: FC = () => {
    return (
        <main id="app">
            <div className={$styles.container}>
                <div className={$styles.block}>
                    ink next app !
                    <LinkButton variant="secondary" href="https://bilibili.com" target="_blank">
                        点此打开
                    </LinkButton>
                </div>
            </div>
        </main>
    );
};
export default App;
