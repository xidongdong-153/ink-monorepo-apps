import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, App as AntdApp } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

import { FC, useEffect, useState } from 'react';

import $styles from './app.module.css';

const App: FC = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:2334/');

                // 嗷呜，不对劲，赶紧检查一下！
                if (!response.ok) {
                    throw new Error('骑手丢了餐，泪奔😭');
                }

                const resMessage = await response.text();
                setMessage(resMessage);
            } catch (error) {
                console.log('哎呀，出错了：', error); // 骑手不小心摔倒了，我们安慰一下他
            }
        };
        fetchData();
    }, []);

    return (
        <ConfigProvider
            locale={zhCN}
            theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    colorPrimary: '#00B96B',
                },
                components: {
                    Layout: {
                        colorBgBody: '',
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">
                <AntdApp>
                    <div className={$styles.app}>
                        <div className={$styles.container}>ink admin msg: {message}</div>
                    </div>
                </AntdApp>
            </StyleProvider>
        </ConfigProvider>
    );
};
export default App;
