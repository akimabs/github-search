import React, { memo, useCallback, useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { Endpoint } from 'types';
import { Text } from 'app/components';
import { request } from 'app/utils';
import { CardList, Header } from './components';
import { styles } from './styles';
import { ColorsValue } from 'app/themes';
import { useDispatch, useSelector } from 'react-redux';
import { setDataList } from 'app/lib/store/actions/users';
import { isEmpty } from 'lodash';

const Home = () => {
  const [isSearchOn, setSearchOn] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [dataUser, setDataUSer] = useState<any>({});
  const dispatch = useDispatch();

  const { data } = useSelector(({ users }: any) => users);

  const getData = useCallback(() => {
    setLoading(true);
    request({
      endpoint: Endpoint.list,
      method: 'GET',
      params: {
        q: 'followers:100',
        page: 1,
        per_page: 100,
      },
    })
      .then(response => {
        dispatch(setDataList(response?.data?.items));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => {
    if (data?.length === 0) {
      getData();
    }
  }, [data?.length, dispatch, getData]);

  const SearchPage = memo(() => {
    if (isEmpty(dataUser)) {
      return (
        <View style={styles.containerSearch}>
          <Text type="bold">Find the username</Text>
          <Text type="regular" color={ColorsValue.text + 90} size="description">
            Search all of Github for People
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.containerCard}>
        <View style={styles.containerHeaderCard}>
          <Image source={{ uri: dataUser?.avatar_url }} style={styles.avatar} />
          <View>
            <Text type="bold" size="subtitle">
              {dataUser?.login}
            </Text>
            <Text type="thin" size="subtitle" color={ColorsValue.text + 90}>
              {dataUser?.name ? dataUser.name : '-'}
            </Text>
            <Text type="thin" size="subtitle" color={ColorsValue.text + 90}>
              {dataUser?.location ? dataUser.location : '-'}
            </Text>
            <Text
              style={styles.containerText}
              type="thin"
              size="subtitle"
              color={ColorsValue.text + 90}>
              {dataUser?.bio ? dataUser.bio : '-'}
            </Text>
          </View>
        </View>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <Header
        resultSearch={(dataSearch: any) => setDataUSer(dataSearch?.data)}
        keySearch={(text: string) => {
          if (text.length !== 0) {
            setSearchOn(true);
          } else {
            setSearchOn(false);
          }
        }}
      />
      {isSearchOn ? (
        <SearchPage />
      ) : (
        <CardList onRefresh={getData} isLoading={isLoading} data={data} />
      )}
    </View>
  );
};

export default Home;
