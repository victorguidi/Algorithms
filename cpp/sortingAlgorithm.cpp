#include <iostream>
#include <algorithm>
#include <cmath>
#include <vector>

using namespace std;

int INT_MAX = 1000000;

pair<int, int> findSmallestDifference(vector<int> v) {
    sort(v.begin(), v.end()); // sorting the array
    int smallest = INT_MAX;
    pair<int, int> result;
    for (int i = 0; i < v.size() - 1; i++) {
        int diff = abs(v[i] - v[i + 1]);
        if (diff < smallest) {
            smallest = diff;
            result = {v[i], v[i + 1]};
        }
    }
    return result;
}

int main() {
    vector<int> v = {45, 3, 34, 87, 15, 20, 30};
    auto result = findSmallestDifference(v);
    cout << "The pair with the smallest difference is: (" << result.first << ", " << result.second << ")" << endl;
    return 0;
}

