import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  // if (!history || !history.length) return null;

  if (!history || !history.length) return <Text>We haven't focused on anything yet</Text>;

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on: </Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    flex: 1
  },
  item: {
    fontSize: fontSizes.m,
    color: colors.purple,
    paddingTop: spacing.sm
  },
  title: {
    color: colors.purple,
    fontSize: fontSizes.m,
    fontWeight: 'bold',
  },
});
