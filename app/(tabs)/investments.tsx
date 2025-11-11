import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import GlassButton from '@/components/GlassButton';
import { Colors, Spacing, Typography, BorderRadius } from '@/constants/theme';

const { width } = Dimensions.get('window');

const categories = ['All', 'Stocks', 'Crypto', 'ETFs', 'Bonds'];

const investments = [
  {
    id: '1',
    name: 'Apple Inc.',
    symbol: 'AAPL',
    type: 'Stocks',
    shares: 25,
    price: 178.45,
    change: 2.5,
    value: 4461.25,
    icon: 'logo-apple',
  },
  {
    id: '2',
    name: 'Tesla Inc.',
    symbol: 'TSLA',
    type: 'Stocks',
    shares: 15,
    price: 242.80,
    change: 5.8,
    value: 3642.00,
    icon: 'car-sport',
  },
  {
    id: '3',
    name: 'Bitcoin',
    symbol: 'BTC',
    type: 'Crypto',
    shares: 0.5,
    price: 67850.00,
    change: -1.2,
    value: 33925.00,
    icon: 'logo-bitcoin',
  },
  {
    id: '4',
    name: 'Ethereum',
    symbol: 'ETH',
    type: 'Crypto',
    shares: 5.2,
    price: 3420.50,
    change: 3.4,
    value: 17786.60,
    icon: 'diamond',
  },
  {
    id: '5',
    name: 'S&P 500 ETF',
    symbol: 'SPY',
    type: 'ETFs',
    shares: 50,
    price: 455.80,
    change: 1.8,
    value: 22790.00,
    icon: 'analytics',
  },
];

export default function InvestmentsScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInvestments = selectedCategory === 'All'
    ? investments
    : investments.filter(inv => inv.type === selectedCategory);

  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const totalGain = investments.reduce((sum, inv) => sum + (inv.value * inv.change / 100), 0);
  const totalGainPercent = (totalGain / totalValue) * 100;

  return (
    <View style={styles.container}>
      <AnimatedBackground />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>My Portfolio</Text>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name="search" size={24} color={Colors.gold} />
            </TouchableOpacity>
          </View>

          {/* Portfolio Overview */}
          <GlassCard style={styles.portfolioCard} intensity="dark">
            <Text style={styles.portfolioLabel}>Total Portfolio Value</Text>
            <Text style={styles.portfolioValue}>${totalValue.toFixed(2)}</Text>
            <View style={styles.portfolioChange}>
              <Ionicons
                name={totalGainPercent >= 0 ? 'trending-up' : 'trending-down'}
                size={20}
                color={totalGainPercent >= 0 ? Colors.success : Colors.error}
              />
              <Text style={[
                styles.portfolioChangeText,
                { color: totalGainPercent >= 0 ? Colors.success : Colors.error }
              ]}>
                ${Math.abs(totalGain).toFixed(2)} ({totalGainPercent.toFixed(2)}%)
              </Text>
            </View>

            {/* Quick Actions */}
            <View style={styles.quickActions}>
              <GlassButton
                title="Buy"
                onPress={() => {}}
                variant="primary"
                style={styles.quickActionButton}
              />
              <GlassButton
                title="Sell"
                onPress={() => {}}
                variant="secondary"
                style={styles.quickActionButton}
              />
            </View>
          </GlassCard>

          {/* Portfolio Allocation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Asset Allocation</Text>
            <GlassCard style={styles.allocationCard} intensity="medium">
              <View style={styles.allocationBar}>
                <View style={[styles.allocationSegment, { width: '30%', backgroundColor: Colors.gold }]} />
                <View style={[styles.allocationSegment, { width: '40%', backgroundColor: Colors.info }]} />
                <View style={[styles.allocationSegment, { width: '20%', backgroundColor: Colors.success }]} />
                <View style={[styles.allocationSegment, { width: '10%', backgroundColor: Colors.warning }]} />
              </View>

              <View style={styles.allocationLegend}>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.gold }]} />
                  <Text style={styles.legendText}>Stocks 30%</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.info }]} />
                  <Text style={styles.legendText}>Crypto 40%</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.success }]} />
                  <Text style={styles.legendText}>ETFs 20%</Text>
                </View>
                <View style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: Colors.warning }]} />
                  <Text style={styles.legendText}>Bonds 10%</Text>
                </View>
              </View>
            </GlassCard>
          </View>

          {/* Category Filter */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={[
                  styles.categoryButton,
                  selectedCategory === category && styles.categoryButtonActive,
                ]}
              >
                {selectedCategory === category && (
                  <LinearGradient
                    colors={Colors.goldGradient}
                    style={styles.categoryGradient}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  />
                )}
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Holdings List */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Holdings</Text>
            {filteredInvestments.map((investment) => (
              <GlassCard key={investment.id} style={styles.holdingCard} intensity="medium">
                <View style={styles.holding}>
                  <View style={styles.holdingIcon}>
                    <Ionicons name={investment.icon as any} size={24} color={Colors.gold} />
                  </View>
                  <View style={styles.holdingInfo}>
                    <Text style={styles.holdingName}>{investment.name}</Text>
                    <Text style={styles.holdingShares}>
                      {investment.shares} {investment.type === 'Crypto' ? 'coins' : 'shares'}
                    </Text>
                  </View>
                  <View style={styles.holdingValues}>
                    <Text style={styles.holdingValue}>${investment.value.toFixed(2)}</Text>
                    <View style={styles.holdingChange}>
                      <Ionicons
                        name={investment.change >= 0 ? 'arrow-up' : 'arrow-down'}
                        size={12}
                        color={investment.change >= 0 ? Colors.success : Colors.error}
                      />
                      <Text
                        style={[
                          styles.holdingChangeText,
                          { color: investment.change >= 0 ? Colors.success : Colors.error }
                        ]}
                      >
                        {Math.abs(investment.change).toFixed(2)}%
                      </Text>
                    </View>
                  </View>
                </View>
              </GlassCard>
            ))}
          </View>

          {/* Market Insights */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Market Insights</Text>
            <GlassCard style={styles.insightCard} intensity="dark">
              <View style={styles.insightHeader}>
                <Ionicons name="bulb" size={24} color={Colors.gold} />
                <Text style={styles.insightTitle}>Investment Tip</Text>
              </View>
              <Text style={styles.insightText}>
                Your portfolio is well-diversified! Consider rebalancing if any asset class exceeds 50% of your total holdings.
              </Text>
            </GlassCard>

            <GlassCard style={styles.insightCard} intensity="dark">
              <View style={styles.insightHeader}>
                <Ionicons name="trophy" size={24} color={Colors.success} />
                <Text style={styles.insightTitle}>Top Performer</Text>
              </View>
              <Text style={styles.insightText}>
                Tesla Inc. is up 5.8% today, making it your top performer this week!
              </Text>
            </GlassCard>
          </View>

          <View style={{ height: 100 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: Spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: Typography.sizes.xxl,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  searchButton: {
    padding: Spacing.sm,
  },
  portfolioCard: {
    marginBottom: Spacing.lg,
    padding: Spacing.lg,
  },
  portfolioLabel: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    marginBottom: Spacing.xs,
  },
  portfolioValue: {
    fontSize: Typography.sizes.xxxl,
    color: Colors.gold,
    fontWeight: Typography.weights.extrabold,
    marginBottom: Spacing.sm,
  },
  portfolioChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  portfolioChangeText: {
    fontSize: Typography.sizes.md,
    marginLeft: Spacing.xs,
    fontWeight: Typography.weights.semibold,
  },
  quickActions: {
    flexDirection: 'row',
    gap: Spacing.md,
  },
  quickActionButton: {
    flex: 1,
  },
  section: {
    marginBottom: Spacing.lg,
  },
  sectionTitle: {
    fontSize: Typography.sizes.lg,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
    marginBottom: Spacing.md,
  },
  allocationCard: {
    padding: Spacing.md,
  },
  allocationBar: {
    height: 12,
    borderRadius: BorderRadius.sm,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: Spacing.md,
  },
  allocationSegment: {
    height: '100%',
  },
  allocationLegend: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: Spacing.xs,
  },
  legendText: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
  },
  categoryScroll: {
    marginBottom: Spacing.lg,
  },
  categoryContainer: {
    paddingRight: Spacing.md,
  },
  categoryButton: {
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    borderRadius: BorderRadius.lg,
    marginRight: Spacing.sm,
    backgroundColor: Colors.glassLight,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
  },
  categoryButtonActive: {
    borderColor: Colors.gold,
  },
  categoryGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  categoryText: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    fontWeight: Typography.weights.semibold,
  },
  categoryTextActive: {
    color: Colors.deepNavy,
  },
  holdingCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  holding: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  holdingIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.glassLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Spacing.md,
  },
  holdingInfo: {
    flex: 1,
  },
  holdingName: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
  },
  holdingShares: {
    fontSize: Typography.sizes.xs,
    color: Colors.lightGray,
    marginTop: Spacing.xs,
  },
  holdingValues: {
    alignItems: 'flex-end',
  },
  holdingValue: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.bold,
  },
  holdingChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.xs,
  },
  holdingChangeText: {
    fontSize: Typography.sizes.xs,
    fontWeight: Typography.weights.semibold,
    marginLeft: 2,
  },
  insightCard: {
    marginBottom: Spacing.sm,
    padding: Spacing.md,
  },
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  insightTitle: {
    fontSize: Typography.sizes.md,
    color: Colors.white,
    fontWeight: Typography.weights.semibold,
    marginLeft: Spacing.sm,
  },
  insightText: {
    fontSize: Typography.sizes.sm,
    color: Colors.lightGray,
    lineHeight: 20,
  },
});
