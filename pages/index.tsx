import React from 'react';
import { NextPage } from 'next';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

interface InitialProps {
    greeting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = (props) => {
return <div>{props.greeting}</div>
}

IndexPage.getInitialProps = async () => ({
    greeting: 'Hello World!'
});

export default IndexPage;