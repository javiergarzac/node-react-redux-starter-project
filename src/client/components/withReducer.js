import React from 'react';
import { object } from 'prop-types';

const withReducer = (key, reducer) => WrappedComponent => {
    const Extended = (props, context) => {
        if (context.store && context.store.getState()[key]) {
            return <WrappedComponent {...props} />
        }
        context.store.injectReducer(key, reducer);

        return <WrappedComponent {...props} />;
    };

    Extended.contextTypes = {
        store: object
    };

    return Extended;
};

export { withReducer };
