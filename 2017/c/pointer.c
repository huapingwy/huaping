#include <stdio.h>
int main (void)
{
	int urn[5] = {1, 2, 3, 4, 5};
	int *ptr1, *ptr2, *ptr3;
	ptr1 = urn;
	ptr2 = &urn[2];
	printf("ptr1 = %p\t*ptr1=%d\t&ptr1=%p\n", ptr1, *ptr1, &ptr1);
	ptr3 = ptr1 + 4;
	printf("ptr1 + 4 = %p\t *(ptr1+4)= %d\n", ptr1+4, *(ptr1+4));
	return 0;
}
