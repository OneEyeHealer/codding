export const codes = [
  {
    key: "code1",
    title: "Array Decleration Types",
    tags: ["array", "decleration"],
    code: `
  #include <iostream>
  #include <string>
  using namespace std;

  int main(){
    cout<< "Program starts " << endl;
    
    // decleration of array
    int a[100]; // garbage values
    int b [100] = {0}; // all 0
    int c [100] = {1,2,3}; // 1 2 3 rest (97 => 0)
    int d[] = {1, 2, 3}; // only => 1 2 3

    // printing array 
    cout << a << endl; // 0xe12a1ff720
    cout << b << endl; // 0xe12a1ff590
    cout << c << endl; // 0xe12a1ff400
    cout << d << endl; // 0xe12a1ff3f4

    // print array output
    for (const int &n: d){
        cout << n << " ";
    }
    return 0;
}
    `,
  },
];
