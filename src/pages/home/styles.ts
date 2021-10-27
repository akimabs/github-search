import { StyleSheet } from 'react-native';
import { ColorsValue } from 'app/themes';
import { Device } from 'app/utils';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import { RadiusSizes } from 'types';

export const styles = StyleSheet.create({
  // Header
  containerHeader: {
    backgroundColor: ColorsValue.background_color,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
  },
  containerInputSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerInput: {
    backgroundColor: ColorsValue.secondary_color,
    width: Device.getDeviceWidth() * 0.9,
    height: 45,
    marginTop: 10,
    borderRadius: RadiusSizes.small,
  },
  input: {
    fontSize: fs(18, Device.getDeviceHeight()),
    color: ColorsValue.text,
    paddingHorizontal: 15,
  },
  buttonCancel: {
    height: 45,
    justifyContent: 'center',
    marginTop: 5,
    alignItems: 'center',
    alignContent: 'center',
    marginRight: 5,
  },

  // Search
  containerSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardLoading: {
    marginTop: 20,
  },
  containerCard: {
    width: Device.getDeviceWidth(),
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: ColorsValue.text + 90,
    padding: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    backgroundColor: 'lightgrey',
    borderRadius: 25,
    marginRight: 20,
  },
  containerHeaderCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  containerHeaderCardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  containerText: {
    width: Device.getDeviceWidth() * 0.8,
  },

  //
  container: {
    flex: 1,
    backgroundColor: ColorsValue.background_color,
  },
});
