#include <stdio.h>

struct Student {
	char *name;
	int age;
} stu[2] = {{"MJ", 12},{"JJ", 37}};

int main()
{
	for(int i = 0; i < 2; i++)
	{
		printf("%s\t%d\n", stu[i].name, stu[i].age);
	}
};

