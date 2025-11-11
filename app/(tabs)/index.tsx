import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { ISA_INFO, ISA_ANNUAL_ALLOWANCE, LIFETIME_ISA_MAX, getDaysUntilTaxYearEnd, formatCurrency, getTaxYearDates } from '@/constants/isaData';

const USER_ISAS = {
  cash: { contributed: 5000, balance: 5150, provider: 'NatWest' },
  stocks_shares: { contributed: 8000, balance: 9200, provider: 'Vanguard' },
  lifetime: { contributed: 3000, balance: 3750, provider: 'Moneybox' },
  innovative_finance: { contributed: 0, balance: 0, provider: 'None' },
};

export default function DashboardScreen() {
  const total = Object.values(USER_ISAS).reduce((s, i) => s + i.contributed, 0);
  const remaining = ISA_ANNUAL_ALLOWANCE - total;
  const days = getDaysUntilTaxYearEnd();
  const taxYear = getTaxYearDates();
  const percent = (total / ISA_ANNUAL_ALLOWANCE) * 100;
  const lisaBonus = USER_ISAS.lifetime.contributed * 0.25;

  return (
    <View style={styles.container}>
      <AnimatedBackground />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>ISA Dashboard</Text>
              <Text style={styles.year}>{taxYear.start.getFullYear()}/{taxYear.end.getFullYear()} Tax Year</Text>
            </View>
            <LinearGradient colors={Colors.goldGradient} style={styles.logo}>
              <Text style={styles.logoText}>FN</Text>
            </LinearGradient>
          </View>

          {days <= 30 && (
            <GlassCard style={styles.card} intensity="dark">
              <View style={styles.row}>
                <Ionicons name="warning" size={24} color={Colors.warning} />
                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text style={styles.warn}>Tax Year Ends in {days} Days!</Text>
                  <Text style={styles.sub}>Use your {formatCurrency(remaining)} allowance</Text>
                </View>
              </View>
            </GlassCard>
          )}

          <GlassCard style={styles.card} intensity="dark">
            <Text style={styles.label}>Annual ISA Allowance</Text>
            <Text style={styles.big}>{formatCurrency(ISA_ANNUAL_ALLOWANCE)}</Text>
            <View style={styles.bar}>
              <LinearGradient colors={Colors.goldGradient} style={{ width: `${percent}%`, height: '100%', borderRadius: 6 }} />
            </View>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Used</Text>
                <Text style={styles.statVal}>{formatCurrency(total)}</Text>
                <Text style={styles.statPer}>{percent.toFixed(0)}%</Text>
              </View>
              <View style={styles.div} />
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Left</Text>
                <Text style={styles.statVal}>{formatCurrency(remaining)}</Text>
                <Text style={styles.statPer}>{(100 - percent).toFixed(0)}%</Text>
              </View>
              <View style={styles.div} />
              <View style={styles.stat}>
                <Text style={styles.statLabel}>Days</Text>
                <Text style={styles.statVal}>{days}</Text>
                <Text style={styles.statPer}>left</Text>
              </View>
            </View>
          </GlassCard>

          <Text style={styles.section}>My ISAs</Text>

          <GlassCard style={styles.card} intensity="medium">
            <View style={styles.row}>
              <View style={[styles.icon, { backgroundColor: ISA_INFO.cash.color + '30' }]}>
                <Ionicons name="cash" size={24} color={ISA_INFO.cash.color} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Cash ISA</Text>
                <Text style={styles.sub}>{USER_ISAS.cash.provider} • Low Risk</Text>
              </View>
            </View>
            <View style={[styles.row, { marginTop: 12 }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Contributed</Text>
                <Text style={styles.val}>{formatCurrency(USER_ISAS.cash.contributed)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Balance</Text>
                <Text style={[styles.val, { color: Colors.success }]}>{formatCurrency(USER_ISAS.cash.balance)}</Text>
              </View>
            </View>
          </GlassCard>

          <GlassCard style={styles.card} intensity="medium">
            <View style={styles.row}>
              <View style={[styles.icon, { backgroundColor: ISA_INFO.stocks_shares.color + '30' }]}>
                <Ionicons name="trending-up" size={24} color={ISA_INFO.stocks_shares.color} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Stocks & Shares ISA</Text>
                <Text style={styles.sub}>{USER_ISAS.stocks_shares.provider} • Medium Risk</Text>
              </View>
            </View>
            <View style={[styles.row, { marginTop: 12 }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Contributed</Text>
                <Text style={styles.val}>{formatCurrency(USER_ISAS.stocks_shares.contributed)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Balance</Text>
                <Text style={[styles.val, { color: Colors.success }]}>{formatCurrency(USER_ISAS.stocks_shares.balance)}</Text>
              </View>
            </View>
          </GlassCard>

          <GlassCard style={styles.card} intensity="dark">
            <View style={styles.row}>
              <View style={[styles.icon, { backgroundColor: ISA_INFO.lifetime.color + '30' }]}>
                <Ionicons name="home" size={24} color={ISA_INFO.lifetime.color} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.name}>Lifetime ISA</Text>
                <Text style={styles.sub}>{USER_ISAS.lifetime.provider} • 25% Gov Bonus</Text>
              </View>
            </View>
            <View style={[styles.row, { marginTop: 12 }]}>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Contributed</Text>
                <Text style={styles.val}>{formatCurrency(USER_ISAS.lifetime.contributed)}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.sub}>Gov Bonus</Text>
                <Text style={[styles.val, { color: ISA_INFO.lifetime.color }]}>+{formatCurrency(lisaBonus)}</Text>
              </View>
            </View>
            <View style={[styles.bar, { marginTop: 12, height: 4 }]}>
              <View style={{ width: `${(USER_ISAS.lifetime.contributed / LIFETIME_ISA_MAX) * 100}%`, height: '100%', backgroundColor: ISA_INFO.lifetime.color, borderRadius: 2 }} />
            </View>
            <Text style={[styles.sub, { marginTop: 4 }]}>{formatCurrency(LIFETIME_ISA_MAX - USER_ISAS.lifetime.contributed)} left for max bonus</Text>
          </GlassCard>

          <TouchableOpacity>
            <GlassCard style={styles.card} intensity="light">
              <View style={{ alignItems: 'center', paddingVertical: 12 }}>
                <Ionicons name="add-circle" size={32} color={Colors.gold} />
                <Text style={[styles.name, { marginTop: 8 }]}>Add Another ISA</Text>
                <Text style={styles.sub}>Track ISAs from any provider</Text>
              </View>
            </GlassCard>
          </TouchableOpacity>

          <GlassCard style={[styles.card, { marginTop: 16 }]} intensity="dark">
            <View style={styles.row}>
              <Ionicons name="bulb" size={24} color={Colors.gold} />
              <Text style={[styles.name, { marginLeft: 12 }]}>Quick Tip</Text>
            </View>
            <Text style={[styles.sub, { marginTop: 8, lineHeight: 20 }]}>
              Contribute the remaining {formatCurrency(LIFETIME_ISA_MAX - USER_ISAS.lifetime.contributed)} to your LISA before tax year end to get {formatCurrency((LIFETIME_ISA_MAX - USER_ISAS.lifetime.contributed) * 0.25)} free government bonus!
            </Text>
          </GlassCard>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safe: { flex: 1 },
  scroll: { padding: Spacing.md },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: Spacing.lg },
  title: { fontSize: Typography.sizes.xxl, color: Colors.white, fontWeight: Typography.weights.bold },
  year: { fontSize: Typography.sizes.sm, color: Colors.gold, marginTop: 4, fontWeight: Typography.weights.semibold },
  logo: { width: 50, height: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' },
  logoText: { fontSize: 20, fontWeight: Typography.weights.extrabold, color: Colors.deepNavy },
  card: { marginBottom: Spacing.sm, padding: Spacing.md },
  row: { flexDirection: 'row', alignItems: 'center' },
  label: { fontSize: Typography.sizes.sm, color: Colors.lightGray, marginBottom: 4 },
  big: { fontSize: Typography.sizes.xxxl, color: Colors.gold, fontWeight: Typography.weights.extrabold, marginBottom: 12 },
  bar: { height: 12, backgroundColor: Colors.glassLight, borderRadius: 6, overflow: 'hidden', marginBottom: 12 },
  stats: { flexDirection: 'row', justifyContent: 'space-between' },
  stat: { flex: 1, alignItems: 'center' },
  statLabel: { fontSize: Typography.sizes.xs, color: Colors.lightGray, marginBottom: 4 },
  statVal: { fontSize: Typography.sizes.md, color: Colors.white, fontWeight: Typography.weights.bold },
  statPer: { fontSize: Typography.sizes.xs, color: Colors.gold, fontWeight: Typography.weights.semibold, marginTop: 2 },
  div: { width: 1, backgroundColor: Colors.glassLight, marginHorizontal: Spacing.sm },
  section: { fontSize: Typography.sizes.lg, color: Colors.white, fontWeight: Typography.weights.bold, marginBottom: Spacing.md, marginTop: Spacing.md },
  icon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  name: { fontSize: Typography.sizes.md, color: Colors.white, fontWeight: Typography.weights.semibold },
  sub: { fontSize: Typography.sizes.xs, color: Colors.lightGray, marginTop: 2 },
  val: { fontSize: Typography.sizes.md, color: Colors.white, fontWeight: Typography.weights.bold, marginTop: 2 },
  warn: { fontSize: Typography.sizes.md, color: Colors.warning, fontWeight: Typography.weights.bold },
});
