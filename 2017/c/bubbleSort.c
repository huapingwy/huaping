#include <stdio.h>
void bubbleSort (int * arr, int size)
{
	int i, j, temp;

	for(i = 0; i < size - 1; i++)
	{
		for(j = 0; j < size - 1 - j; j++)
		{
			printf("%d\t%d\n", *(arr + i), *(arr +i +1));
			if (*(arr + i) > *(arr + i + 1))
			{
				temp = *(arr +i);
				*(arr + i) = *(arr + i + 1);
				*(arr + i + 1) = temp;
			}
		}
	}	
}


int main (void)
{
	int number[5] = {23,1,4,54,200};
	bubbleSort(number, 5);
	for(int i = 0; i < 5; i++)
	{
		printf("%d\n", number[i]);
	}
	return 0;
}
