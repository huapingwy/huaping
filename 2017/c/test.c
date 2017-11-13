#include <stdio.h>

int main ()
{
	int a;
	int *p = &a;
	printf("请输入一个整数：");
	scanf("%d", &a);
	printf("%p\t%d\n", p, a);
	return 0;
};
