//
//  main.c
//  C_primer_8.1_getchar_putchar
//
//  Created by huaping on 2017/10/9.
//  Copyright © 2017年 huaping. All rights reserved.
//

#include <stdio.h>
#define SIZE 4

int main(int argc, const char * argv[]) {
    // insert code here...
    // printf("Hello, World!\n");
    
//    char ch;
//    while((ch = getchar()) != '#') {
//        putchar(ch);
//    }
    int
    
//    int num = 1024;
//    int * ptr_num = &num;
//    int * ptr_num2 = ptr_num;
//
//
//    *ptr_num = 1111;
//
//    printf("%d\n", *ptr_num2);
    
    
    short detes[SIZE];
    short *pti;
    short index;
    
    double bills[SIZE];
    double * ptf;
    
    pti = detes;
    ptf = bills;
    printf("%p\n%p\n", pti, ptf);
    ptf++;
    pti++;
    printf("%p\n%p\n", pti, ptf);
    
    
    return 0;
}
