#include <stdio.h>
#define SIZE 10

int sump(int * start, int * end);

int main()
{
	int marbles[SIZE] = {20, 10, 5, 39, 4, 16, 19, 26, 31};
	long answer;
	printf("%p\n", marbles+ SIZE);
	answer = sump(marbles, marbles + SIZE);
	printf("the total of marbles is %ld\n", answer);
	return 0;
}

int sump(int * start, int * end)
{
	int total = 0;
	while(start < end)
	{
		printf("%p\n", start);
		total += *start;
		start++;
	}
	return total;
}
