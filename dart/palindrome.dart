//remove whitespace from dart

import 'dart:io';

void main() {
  print("Enter the number : ");
  int? number = int.parse(stdin.readLineSync()!);
  bool value = palindrome(number);
  if (value == true) {
    print("$number is the palindrome number.");
  } else {
    print("$number is not the palindrome number.");
  }
}

bool palindrome(int num) {
  int org_num = num;

  int rev_num = 0;

  while (num != 0) {
    int rem = num % 10;
    rev_num = rev_num * 10 + rem;

    num = (num / 10).toInt();
  }
  if (org_num == rev_num) {
    return true;
  }
  return false;
}
