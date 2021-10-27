import { Text } from 'app/components';
import { ColorsValue } from 'app/themes';
import { request } from 'app/utils';
import React, { FC, useCallback, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import { Endpoint } from 'types';
import { styles } from '../../styles';

type Props = {
  data: any[];
  isLoading: boolean;
  onRefresh: () => void;
};

const CardList: FC<Props> = ({ data, isLoading, onRefresh }) => {
  const [dataUser, setDataUser] = useState<any>({});
  const [indexOpenCard, setIndexOpenCard] = useState<number>(-1);
  const [isLoadingData, setLoading] = useState<boolean>(false);
  const [refeshed, setRefreshed] = useState<boolean>(false);

  const getDataUSer = useCallback(
    indexOpen => {
      setLoading(true);
      setIndexOpenCard(indexOpen);
      request({
        endpoint: Endpoint.search,
        method: 'GET',
        id: data[indexOpen]?.login,
      })
        .then(response => {
          setDataUser(response?.data);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [data],
  );

  return (
    <FlatList
      data={isLoading ? Array(1) : data}
      keyExtractor={(_, index) => index.toString()}
      style={styles.cardLoading}
      refreshControl={
        <RefreshControl
          refreshing={refeshed}
          onRefresh={() => {
            setRefreshed(true);
            setTimeout(() => {
              onRefresh();
              setRefreshed(false);
            }, 1000);
          }}
        />
      }
      renderItem={({ item, index }) => {
        if (isLoading) {
          return (
            <View>
              <ActivityIndicator color={ColorsValue.text} />
            </View>
          );
        } else {
          if (indexOpenCard === index && !isLoadingData) {
            return (
              <TouchableOpacity onPress={() => getDataUSer(index)} style={styles.containerCard}>
                <View style={styles.containerHeaderCard}>
                  <Image source={{ uri: item?.avatar_url }} style={styles.avatar} />
                  <View>
                    <Text type="bold" size="subtitle">
                      {item?.login}
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
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity onPress={() => getDataUSer(index)} style={styles.containerCard}>
                <View style={styles.containerHeaderCard}>
                  <Image source={{ uri: item?.avatar_url }} style={styles.avatar} />
                  <View>
                    <Text type="bold" size="subtitle">
                      {item?.login}
                    </Text>
                    <Text type="thin" size="subtitle" color={ColorsValue.text + 90}>
                      Tap to see the data
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        }
      }}
    />
  );
};

export default CardList;
