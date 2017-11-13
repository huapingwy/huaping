//
//  main.c
//  array_pointer
//
//  Created by huaping on 2017/10/13.
//  Copyright © 2017年 huaping. All rights reserved.
//

#include <stdio.h>

int search();

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    
//    double score[7] = {98,99,100,101,102};
//    double *p_score = score;
//    int i = 0;
//
//    for (i; i < 7; i++)
//    {
//        printf("%p\t%2lf\n", (p_score + i) , *(p_score + i));
//    }
//
//    printf("%p\n", p_score);
    
    int i = search();
    printf("%d\n", i);
    
    return 0;
}



int search()
{
    double score[7] = {98,99,100,101,102};
    int serahcNum;
    int i;
    printf("请输入要查找的整形数字：");
    scanf("%d", &serahcNum);
    for(i = 0; i < 5; i++)
    {
        if (*(score + i) == serahcNum)
        {
            return i;
        }
    }
    return 0;
}
