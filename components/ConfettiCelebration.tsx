import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
  Easing,
  withDelay,
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface ConfettiPieceProps {
  delay: number;
  color: string;
  startX: number;
}

const ConfettiPiece: React.FC<ConfettiPieceProps> = ({ delay, color, startX }) => {
  const translateY = useSharedValue(-50);
  const translateX = useSharedValue(0);
  const rotate = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    // Fall down
    translateY.value = withDelay(
      delay,
      withTiming(height + 50, {
        duration: 2500 + Math.random() * 1000,
        easing: Easing.cubic,
      })
    );

    // Sway side to side
    translateX.value = withDelay(
      delay,
      withRepeat(
        withSequence(
          withTiming(30 * (Math.random() - 0.5), { duration: 1000 }),
          withTiming(-30 * (Math.random() - 0.5), { duration: 1000 })
        ),
        3,
        true
      )
    );

    // Rotate
    rotate.value = withDelay(
      delay,
      withRepeat(
        withTiming(360 * (Math.random() > 0.5 ? 1 : -1), {
          duration: 1500,
          easing: Easing.linear,
        }),
        3,
        false
      )
    );

    // Fade out near the end
    opacity.value = withDelay(
      delay + 2000,
      withTiming(0, { duration: 1500 })
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { translateX: translateX.value + startX },
      { rotate: `${rotate.value}deg` },
    ],
    opacity: opacity.value,
  }));

  return (
    <Animated.View
      style={[
        styles.confettiPiece,
        { backgroundColor: color },
        animatedStyle,
      ]}
    />
  );
};

interface ConfettiCelebrationProps {
  show: boolean;
}

const ConfettiCelebration: React.FC<ConfettiCelebrationProps> = ({ show }) => {
  if (!show) return null;

  const confettiColors = [
    '#FFD700', // Gold
    '#FF6B9D', // Pink
    '#C060FF', // Purple
    '#4ECDC4', // Teal
    '#FF9F1C', // Orange
    '#2EC4B6', // Cyan
    '#E71D36', // Red
    '#90EE90', // Light Green
  ];

  const confettiPieces = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    delay: Math.random() * 500,
    color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
    startX: (Math.random() - 0.5) * width,
  }));

  return (
    <View style={styles.container} pointerEvents="none">
      {confettiPieces.map((piece) => (
        <ConfettiPiece
          key={piece.id}
          delay={piece.delay}
          color={piece.color}
          startX={piece.startX}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  confettiPiece: {
    position: 'absolute',
    top: -50,
    left: width / 2,
    width: 10,
    height: 10,
    borderRadius: 2,
  },
});

export default ConfettiCelebration;
