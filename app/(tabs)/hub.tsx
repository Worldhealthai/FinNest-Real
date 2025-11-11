import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import AnimatedBackground from '@/components/AnimatedBackground';
import GlassCard from '@/components/GlassCard';
import { Colors, Spacing, Typography } from '@/constants/theme';
import { ISA_INFO, ISA_ANNUAL_ALLOWANCE, LIFETIME_ISA_MAX, EDUCATIONAL_CONTENT, formatCurrency } from '@/constants/isaData';

export default function HubScreen() {
  const [expandedISA, setExpandedISA] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <AnimatedBackground />
      <SafeAreaView style={styles.safe} edges={['top']}>
        <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>ISA Hub</Text>
          <Text style={styles.subtitle}>Everything you need to know about ISAs</Text>

          <Text style={styles.section}>The 4 ISA Types</Text>

          {Object.values(ISA_INFO).map((isa) => (
            <TouchableOpacity key={isa.id} onPress={() => setExpandedISA(expandedISA === isa.id ? null : isa.id)}>
              <GlassCard style={styles.card} intensity="medium">
                <View style={styles.row}>
                  <View style={[styles.icon, { backgroundColor: isa.color + '30' }]}>
                    <Ionicons name={isa.icon as any} size={24} color={isa.color} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.name}>{isa.name}</Text>
                    <Text style={styles.sub}>{isa.riskLevel} Risk • {isa.potentialReturn}</Text>
                  </View>
                  <Ionicons name={expandedISA === isa.id ? "chevron-up" : "chevron-down"} size={20} color={Colors.lightGray} />
                </View>

                {expandedISA === isa.id && (
                  <View style={{ marginTop: 16 }}>
                    <Text style={styles.desc}>{isa.description}</Text>

                    <Text style={[styles.sub, { marginTop: 12, fontWeight: Typography.weights.semibold }]}>Benefits:</Text>
                    {isa.benefits.map((benefit, i) => (
                      <View key={i} style={styles.listRow}>
                        <Text style={styles.bullet}>✓</Text>
                        <Text style={styles.listText}>{benefit}</Text>
                      </View>
                    ))}

                    <Text style={[styles.sub, { marginTop: 8, fontWeight: Typography.weights.semibold }]}>Best For:</Text>
                    {isa.bestFor.map((item, i) => (
                      <View key={i} style={styles.listRow}>
                        <Text style={styles.bullet}>→</Text>
                        <Text style={styles.listText}>{item}</Text>
                      </View>
                    ))}
                  </View>
                )}
              </GlassCard>
            </TouchableOpacity>
          ))}

          <Text style={styles.section}>Key Rules & Limits</Text>

          <GlassCard style={styles.card} intensity="dark">
            <View style={styles.ruleRow}>
              <Ionicons name="cash" size={20} color={Colors.gold} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.ruleName}>Annual Allowance</Text>
                <Text style={styles.sub}>{formatCurrency(ISA_ANNUAL_ALLOWANCE)} per tax year (6 April - 5 April)</Text>
              </View>
            </View>
          </GlassCard>

          <GlassCard style={styles.card} intensity="dark">
            <View style={styles.ruleRow}>
              <Ionicons name="home" size={20} color={ISA_INFO.lifetime.color} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.ruleName}>Lifetime ISA Limit</Text>
                <Text style={styles.sub}>{formatCurrency(LIFETIME_ISA_MAX)} max per year + 25% government bonus</Text>
              </View>
            </View>
          </GlassCard>

          <GlassCard style={styles.card} intensity="dark">
            <View style={styles.ruleRow}>
              <Ionicons name="calendar" size={20} color={Colors.info} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.ruleName}>Use It or Lose It</Text>
                <Text style={styles.sub}>Unused allowance doesn't carry over to next year</Text>
              </View>
            </View>
          </GlassCard>

          <GlassCard style={styles.card} intensity="dark">
            <View style={styles.ruleRow}>
              <Ionicons name="checkmark-circle" size={20} color={Colors.success} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={styles.ruleName}>New 2024 Rule</Text>
                <Text style={styles.sub}>You can now open multiple ISAs of the same type per year!</Text>
              </View>
            </View>
          </GlassCard>

          <Text style={styles.section}>Learn More</Text>

          {EDUCATIONAL_CONTENT.BEGINNER.map((item, i) => (
            <GlassCard key={i} style={styles.card} intensity="medium">
              <Text style={styles.eduTitle}>{item.title}</Text>
              <Text style={[styles.sub, { marginTop: 8, lineHeight: 20 }]}>{item.content}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.category}</Text>
              </View>
            </GlassCard>
          ))}

          {EDUCATIONAL_CONTENT.INTERMEDIATE.slice(0, 2).map((item, i) => (
            <GlassCard key={i} style={styles.card} intensity="medium">
              <Text style={styles.eduTitle}>{item.title}</Text>
              <Text style={[styles.sub, { marginTop: 8, lineHeight: 20 }]}>{item.content}</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.category}</Text>
              </View>
            </GlassCard>
          ))}

          <GlassCard style={styles.card} intensity="dark">
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="school" size={24} color={Colors.gold} />
              <Text style={[styles.name, { marginLeft: 12 }]}>Want to Learn More?</Text>
            </View>
            <Text style={[styles.sub, { marginTop: 8, lineHeight: 20 }]}>
              FinNest provides comprehensive ISA education to help you make informed decisions about your financial future.
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
  title: { fontSize: Typography.sizes.xxl, color: Colors.white, fontWeight: Typography.weights.bold },
  subtitle: { fontSize: Typography.sizes.sm, color: Colors.lightGray, marginTop: 4, marginBottom: Spacing.lg },
  section: { fontSize: Typography.sizes.lg, color: Colors.white, fontWeight: Typography.weights.bold, marginBottom: Spacing.md, marginTop: Spacing.md },
  card: { marginBottom: Spacing.sm, padding: Spacing.md },
  row: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 48, height: 48, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  name: { fontSize: Typography.sizes.md, color: Colors.white, fontWeight: Typography.weights.semibold },
  sub: { fontSize: Typography.sizes.xs, color: Colors.lightGray, marginTop: 2 },
  desc: { fontSize: Typography.sizes.sm, color: Colors.white, lineHeight: 20 },
  listRow: { flexDirection: 'row', alignItems: 'flex-start', marginTop: 4 },
  bullet: { color: Colors.gold, marginRight: 8, fontSize: Typography.sizes.sm, fontWeight: Typography.weights.bold },
  listText: { flex: 1, fontSize: Typography.sizes.xs, color: Colors.lightGray, lineHeight: 18 },
  ruleRow: { flexDirection: 'row', alignItems: 'flex-start' },
  ruleName: { fontSize: Typography.sizes.md, color: Colors.white, fontWeight: Typography.weights.semibold, marginBottom: 4 },
  eduTitle: { fontSize: Typography.sizes.md, color: Colors.gold, fontWeight: Typography.weights.bold },
  badge: { alignSelf: 'flex-start', backgroundColor: Colors.gold + '30', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, marginTop: 8 },
  badgeText: { fontSize: Typography.sizes.xs, color: Colors.gold, fontWeight: Typography.weights.bold },
});
