import React, {PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';

type Props = PropsWithChildren;

export default function Layout({children}: Props) {
  return <SafeAreaView>{children}</SafeAreaView>;
}
