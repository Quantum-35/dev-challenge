import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => <React.Fragment>
    <div>Page Not found.</div>
    <Link to='/login'>back to login</Link>
    </React.Fragment>;

export default Page404;