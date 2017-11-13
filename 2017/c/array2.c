#include <stdio.h>

int sum(int * ar, int n)
{
	int i;
	int total = 0;
	for(i = 0; i < n; i++)
	{
		total += *(ar+i);
	}
	return total;
}

int main (void)
{
	int b[5] = {2,3,4,5,6};
	int * p = b;
	printf("%p\t%p\t%p\n",b, &b, &b[0]);
	int a = sum(p, 5);
	printf("%d\n", a);
	return 0;
}
