import { User } from '@/types/userTypes';

// Mock Users with all related data nested
export const users: User[] = [
  {
    id: '0001',
    firstName: 'Sarah',
    lastName: 'Johnson',
    username: 'sample',
    password: 'sample',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    transactionCode: '6363',
    transactionMsg: "The recipient's bank account could not be verified. Please double-check the account number and routing number, then try again.",
    createdAt: '2023-01-15',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '1234567890',
        balance: 8547.32,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Starbucks',
            category: 'Food & Drink',
            date: 'Dec 12, 2024',
            amount: -6.45,
            status: 'success'
          },
          {
            merchant: 'Payroll Deposit',
            category: 'Income',
            date: 'Dec 5, 2024',
            amount: 3250.0,
            status: 'success'
          },
          {
            merchant: 'Chipotle',
            category: 'Food & Drink',
            date: 'Dec 4, 2024',
            amount: -14.32,
            status: 'success'
          },
          {
            merchant: 'Shell Gas Station',
            category: 'Transportation',
            date: 'Dec 3, 2024',
            amount: -52.18,
            status: 'success'
          },
          {
            merchant: 'Electric Company',
            category: 'Utilities',
            date: 'Dec 2, 2024',
            amount: -124.5,
            status: 'failed'
          },
          {
            merchant: 'Rent Payment',
            category: 'Housing',
            date: 'Dec 1, 2024',
            amount: -1850.0,
            status: 'success'
          },
          {
            merchant: 'Netflix',
            category: 'Entertainment',
            date: 'Nov 30, 2024',
            amount: -15.99,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: 'Transportation',
            date: 'Nov 28, 2024',
            amount: -23.45,
            status: 'success'
          },
          {
            merchant: 'Interest Payment',
            category: 'Income',
            date: 'Nov 30, 2024',
            amount: 24.5,
            status: 'success'
          },
          {
            merchant: 'Amazon',
            category: 'Shopping',
            date: 'Dec 4, 2024',
            amount: -89.99,
            status: 'processing'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 24892.5,
        isPrimary: false,
        transactions: [
          {
            merchant: 'Salary Bonus',
            category: 'Income',
            date: 'Dec 10, 2024',
            amount: 500.0,
            status: 'success'
          },
          {
            merchant: 'Monthly Savings Transfer',
            category: 'Transfer',
            date: 'Dec 1, 2024',
            amount: 1000.0,
            status: 'success'
          }
        ]
      }
    ],
    cards: [
      {
        id: 'card_001',
        cardNumber: '4111111111111111',
        cardHolder: 'SARAH JOHNSON',
        expiryDate: '12/26',
        cvv: '123',
        cardType: 'debit',
        cardName: 'Everyday Checking Card',
        balance: 8547.32,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2022-06-15'
      }
    ]
  },
  {
    id: '0002',
    firstName: 'George',
    lastName: 'Miller',
    email: 'gs**@gmail.com',
    username: 'gsachs797@gmail.com',
    password: 'Samantha1962',
    transactionCode: '7894',
    createdAt: '2026-1-23',
    transactionMsg: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
    accounts: [
      {
        type: 'checking',
        name: 'Everyday Checking',
        accountNumber: '2345678901',
        balance: 81677.0,
        isPrimary: true,
        transactions: [
          {
            merchant: 'Transfer from Samantha smith',
            category: '****3673',
            date: 'February 4, 2026',
            amount: 3000,
            status: 'success'
          },
          {
            merchant: 'Transfer from Mark Omah',
            category: '****4721',
            date: 'Dec 20, 2025',
            amount: 7680,
            status: 'success'
          },
          {
            merchant: 'Transfer from John Matthews',
            category: '****4389',
            date: 'Oct 2, 2025',
            amount: 16000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Amazon Services LLC',
            category: '****1663',
            date: 'Sep 24, 2025',
            amount: 15500.0,
            status: 'success'
          },
          {
            merchant: 'Uber',
            category: '****2625',
            date: 'Sep 22, 2025',
            amount: -2450.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sarah Thompson',
            category: '****3667',
            date: 'Sep 10, 2025',
            amount: 14800.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Microsoft Corporation',
            category: '****2535',
            date: 'Aug 28, 2025',
            amount: 16250.0,
            status: 'success'
          },
          {
            merchant: 'Starbucks - Food & Drink',
            category: '****9037',
            date: 'Aug 23, 2025',
            amount: -860.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Daniel Roberts',
            category: '****7543',
            date: 'Aug 12, 2025',
            amount: 13900.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Apple Inc.',
            category: '****3774',
            date: 'Jul 30, 2025',
            amount: 15120.0,
            status: 'success'
          },
          {
            merchant: 'Amazon Online Purchase',
            category: '****8746',
            date: 'July 17, 2025',
            amount: -7320.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Emily Johnson',
            category: '****3667',
            date: 'Jul 14, 2025',
            amount: 14780.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Netflix Inc.',
            category: '****4654',
            date: 'Jun 29, 2025',
            amount: 15860.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Michael Brown',
            category: '****8213',
            date: 'Jun 15, 2025',
            amount: 14240.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Shopify Inc.',
            category: '****9124',
            date: 'Jun 1, 2025',
            amount: 15010.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Olivia Martinez',
            category: '****3478',
            date: 'May 18, 2025',
            amount: 13690.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Google LLC',
            category: '****5682',
            date: 'May 4, 2025',
            amount: 15930.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from David Wilson',
            category: '****7741',
            date: 'Apr 20, 2025',
            amount: 14450.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Meta Platforms Inc.',
            category: '****2298',
            date: 'Apr 6, 2025',
            amount: 15260.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Sophia Anderson',
            category: '****6812',
            date: 'Mar 22, 2025',
            amount: 14100.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Tesla Inc.',
            category: '****9034',
            date: 'Mar 10, 2025',
            amount: 16000.0,
            status: 'success'
          },
          {
            merchant: 'Transfer from Robert Collins',
            category: '****1147',
            date: 'Mar 1, 2025',
            amount: 11780.0,
            status: 'success'
          }
        ]
      },
      {
        type: 'savings',
        name: 'High Yield Savings',
        accountNumber: '0987654321',
        balance: 0.0,
        isPrimary: false
      }
    ],
    cards: [
      {
        id: 'card_003',
        cardNumber: '4532123456789012',
        cardHolder: 'ALEXA COLLINS',
        expiryDate: '08/27',
        cvv: '789',
        cardType: 'debit',
        cardName: 'Premier Checking Card',
        balance: 1652000.0,
        issuer: 'Visa',
        isPrimary: true,
        createdAt: '2021-09-10'
      }
    ]
  }
];
