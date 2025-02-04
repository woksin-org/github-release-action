// Copyright (c) woksin-org. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import { a_release_creator } from './given/a_release_creator';
import { expect } from 'chai';

import { describeThis } from '@woksin/typescript.testing';

describeThis(__filename, () => {
    const release_creator = new a_release_creator().release_creator;
    const version = '1.0.0';
    const result = release_creator.create(version, '');

    it('should return a result', () => expect(result).to.not.be.undefined);
    it('should return a version', () => expect(result.version).to.not.be.undefined);
    it('should return version with v in front', () => result.version.should.equal(`v${version}`));
});
