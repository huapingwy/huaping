#include <stdio.h>
#include <string.h>
struct Student {
	int age;
	char name[200];
	double mathScore;
	double chineseScore;
};

struct Student xiaoMing = { 12, "小明", 23, 100 };
struct Student xiaoHong = {.name = "xiaoHong"};

int main()
{
	strcpy(xiaoHong.name, "xiaohua\0");
	printf("%s\n",xiaoHong.name);			
}
