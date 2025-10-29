
import type { SlideContent } from './types';

export const SLIDES_DATA: SlideContent[] = [
  {
    type: 'title',
    title: 'Connect 4 AI',
    subtitle: 'A Deep Dive into the Minimax Algorithm',
  },
  {
    type: 'points',
    title: 'The Challenge & The Goal',
    points: [
      {
        title: 'Problem Statement',
        text: 'Create a challenging AI that can evaluate the board, predict future moves, and make strategic decisions quickly, providing a real challenge beyond random play.'
      },
      {
        title: 'Project Goal',
        text: 'Implement a strategic AI for Connect 4 using the Minimax algorithm with Alpha-Beta Pruning, allowing for adjustable difficulty by changing its search depth.'
      }
    ]
  },
  {
    type: 'diagram',
    title: 'The Minimax Algorithm',
    explanation: 'Minimax visualizes the game as a "tree" of all possible moves. It operates on two principles to find the optimal move:',
    items: [
        {
            title: 'Maximizing Player (The AI)',
            text: 'Tries to choose the move that leads to the highest possible score.'
        },
        {
            title: 'Minimizing Player (The Human)',
            text: 'Is assumed to play optimally, choosing the move that leads to the lowest score for the AI.'
        }
    ]
  },
  {
    type: 'points',
    title: 'How Minimax Works',
    points: [
      {
        title: '1. Explore the Game Tree',
        text: 'Recursively travels down the tree, simulating potential moves for both the AI and the human player.'
      },
      {
        title: '2. Score the Outcomes',
        text: 'At the end of its search (a win/loss or max depth), a heuristic function assigns a score to the board state. High scores favor the AI, low scores favor the human.'
      },
      {
        title: '3. Propagate Scores Upward',
        text: 'As it returns up the tree, it selects the best outcomes: MAX score for the AI\'s turn, MIN score for the human\'s turn.'
      }
    ]
  },
  {
    type: 'points',
    title: 'Optimization: Alpha-Beta Pruning',
    points: [
      {
        title: 'The Problem',
        text: 'Searching the entire game tree is computationally expensive and slow.'
      },
      {
        title: 'The Solution',
        text: 'A clever optimization that "prunes" (ignores) branches of the game tree that are guaranteed to lead to a worse outcome than one already found.'
      },
      {
        title: 'The Benefit',
        text: 'Allows the AI to search deeper into the future in the same amount of time, making it a much stronger and faster opponent.'
      }
    ]
  },
  {
    type: 'final',
    title: 'The AI in Action: Final Output',
    steps: [
        {
            title: 'Function Call',
            text: 'On the AI\'s turn, the `find_best_move` function is called with the current board state.'
        },
        {
            title: 'Calculation',
            text: 'Minimax with Alpha-Beta Pruning runs, exploring the game tree to find the most advantageous move.'
        },
        {
            title: 'Return Value',
            text: 'The function returns a single integer: the column index (0-6) where the AI will drop its piece.'
        }
    ],
    conclusion: 'This process results in a strategic, calculated move, providing a competitive and engaging gameplay experience.'
  }
];
