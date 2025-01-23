import React from 'react';
import { PropsWithChildren } from 'react';

import Icons from 'react-native-vector-icons/FontAwesome';

type IconsProps = PropsWithChildren<{
    name: string;
}>;

const Icons = ({ name }: IconsProps) => {
    switch (name) {
        case 'circle':
            return <Icons name="circle-thin" size={38} color="#F7CD2E" />;
            break;
        case 'cross':
            return <Icons name="times" size={38} color="#38CC77" />;
            break;
        default:
            return <Icons name="pencil" size={38} color="#0D0D0D" />;
    }
};

