#include <stdio.h>

int main (void)
{
	int x = 30;
	printf("%d\t%p\n", x, &x);
	{
		int x = 77;
		printf("%d\t%p\n", x, &x);
	}
	printf("%d\t%p\n", x, &x);
	
	while(x++ < 33)
	{
		int x = 100;
		x++;
		printf("%d\t%p\n", x, &x);
	};

	printf("%d\t%p\n", x, &x);

	return 0;
}
