class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t.length > s.length) return "";

        const need = new Map<string, number>();

        for (const char of t) {
            need.set(char, (need.get(char) ?? 0) + 1);
        }

        const window = new Map<string, number>();

        let left = 0;
        let have = 0;
        const required = need.size;

        let minLength = Infinity;
        let minLeft = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];

            if (need.has(char)) {
                window.set(char, (window.get(char) ?? 0) + 1);

                if (window.get(char) === need.get(char)) {
                    have++;
                }
            }

            while (have === required) {
                const currentLength = right - left + 1;

                if (currentLength < minLength) {
                    minLength = currentLength;
                    minLeft = left;
                }

                const leftChar = s[left];

                if (need.has(leftChar)) {
                    window.set(
                        leftChar,
                        window.get(leftChar)! - 1
                    );

                    if (window.get(leftChar)! < need.get(leftChar)!) {
                        have--;
                    }
                }

                left++;
            }
        }

        return minLength === Infinity
            ? ""
            : s.substring(minLeft, minLeft + minLength);
    }
}